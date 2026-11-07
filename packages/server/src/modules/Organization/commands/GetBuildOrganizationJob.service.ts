import { Queue } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { OrganizationBuildQueue } from '../Organization.types';
import { ServiceError } from '@/modules/Items/ServiceError';
import { TenantRepository } from '@/modules/System/repositories/Tenant.repository';

@Injectable()
export class GetBuildOrganizationBuildJob {
  constructor(
    private readonly tenantRepository: TenantRepository,

    @InjectQueue(OrganizationBuildQueue)
    private readonly organizationBuildQueue: Queue,
  ) {}

  /**
   * Gets the build job details by job ID.
   * @param {string} jobId - The ID of the job to retrieve.
   * @returns {Promise<any>} - Returns the job details.
   */
  async getJobDetails(jobId: string): Promise<any> {
    if (!process.env.REDIS_HOST || jobId === 'inline') {
      await this.tenantRepository.markAsBuildCompleted();
      return {
        id: jobId,
        state: 'completed',
        progress: 100,
        isCompleted: true,
        isRunning: false,
        isWaiting: false,
        isFailed: false,
      };
    }

    const job = await this.organizationBuildQueue.getJob(jobId);

    if (!job) {
      throw new ServiceError('Job not found', 'JOB.NOT_FOUND');
    }
    const state = await job.getState();

    return {
      id: job.id,
      state,
      progress: job.progress,
      isCompleted: state === 'completed',
      isRunning: state === 'active',
      isWaiting: state === 'waiting' || state === 'waiting-children',
      isFailed: state === 'failed',
    };
  }
}
