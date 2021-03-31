const healthService = require('../src/services/status.services');
const { HealthyStatus, UnhealthyStatus, DegradedStatus } = require('../src/models/status.models');

describe('Test Suite', () => {
  it('should return the correct health status', async () => {
    expect(await healthService.getStatus('Healthy')).toEqual(HealthyStatus);
    expect(await healthService.getStatus('unhealthy')).toEqual(UnhealthyStatus);
    expect(await healthService.getStatus('DeGRADed')).toEqual(DegradedStatus);
  });

  it('should fail for the right reason', async () => {
    expect(await healthService.getStatus('Unknown')).toEqual({ status: 'UNKNOWN' });
  });
});
