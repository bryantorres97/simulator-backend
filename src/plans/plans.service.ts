import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan } from './interfaces/plan.interface';

@Injectable()
export class PlansService {
  constructor(@InjectModel('plans') private readonly planModel: Model<Plan>) {}

  getPlans() {
    return this.planModel.find({ isActive: true });
  }

  getPlanById(id: string) {
    return this.planModel.find({ _id: id, isActive: true });
  }

  createPlan(plan: any) {
    return this.planModel.create(plan);
  }

  updatePlan(id: string, plan: any) {
    return this.planModel.findOneAndUpdate(
      { _id: id, isActive: true },
      { plan },
      { new: true },
    );
  }

  deletePlan(id: string) {
    return this.planModel.findOneAndUpdate(
      { _id: id, isActive: true },
      { isActive: false },
      { new: true },
    );
  }
}
