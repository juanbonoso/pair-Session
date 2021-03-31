const { HealthyStatus, UnhealthyStatus, DegradedStatus } = require('../models/status.models');

exports.getStatus = async (healthType) => {
  switch (healthType?.toLowerCase()) {
    case 'healthy':
      return HealthyStatus;
    case 'degraded':
      return DegradedStatus;
    default:
      return UnhealthyStatus;
  }
};
