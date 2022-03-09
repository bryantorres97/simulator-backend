import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { Plan } from '../plans/interfaces/plan.interface';
import { GetUserByUidDTO } from './dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<User>,
    @InjectModel('plans') private readonly planModel: Model<Plan>,
  ) {}

  getUsers() {
    return this.userModel.find({ isActive: true });
  }

  getUserById(id: string) {
    return this.userModel.findOne({ _id: id, isActive: true });
  }

  createUser(user: any) {
    return this.userModel.create(user);
  }

  async getUserByUid(user: GetUserByUidDTO) {
    let userFound = await this.userModel.findOne({
      uid: user.uid,
      isActive: true,
    });
    if (!userFound) {
      const plan = await this.planModel.findOne({ name: 'Free' });
      let newUser = await this.userModel.create({
        uid: user.uid,
        email: user.email,
        name: user.name,
        pictureURL: user.pictureURL || '',
        plan: plan._id,
      });
      newUser = await newUser.populate('plan');
      return newUser;
    }

    userFound = await userFound.populate('plan');
    return userFound;
  }

  updateUser(id: string, user: any) {
    return this.userModel.findOneAndUpdate(
      { _id: id, isActive: true },
      { user },
      { new: true },
    );
  }

  deleteUser(id: string) {
    return this.userModel.findOneAndUpdate(
      { _id: id, isActive: true },
      { isActive: false },
      { new: true },
    );
  }
}
