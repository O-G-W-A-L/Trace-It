import stringSimilarity from 'string-similarity';

export const calculateClaimScore = (itemDetails, claimDetails) => {
  const weights = {
    uniqueIdentifiers: 0.4,
    locationLost: 0.2,
    type: 0.2,
    dateLost: 0.2
  };

  const scores = {
    uniqueIdentifiers: stringSimilarity.compareTwoStrings(
      itemDetails.uniqueIdentifiers.toLowerCase(),
      claimDetails.uniqueIdentifiers.toLowerCase()
    ),
    locationLost: stringSimilarity.compareTwoStrings(
      itemDetails.locationFound.toLowerCase(),
      claimDetails.locationLost.toLowerCase()
    ),
    type: stringSimilarity.compareTwoStrings(
      itemDetails.type.toLowerCase(),
      claimDetails.type.toLowerCase()
    ),
    dateLost: calculateDateScore(itemDetails.dateFound, claimDetails.dateLost)
  };

  const totalScore = Object.keys(weights).reduce(
    (sum, key) => sum + (scores[key] * weights[key]),
    0
  );

  return { totalScore, detailedScores: scores };
};

const calculateDateScore = (dateFound, dateLost) => {
  const found = new Date(dateFound);
  const lost = new Date(dateLost);
  const diffDays = Math.abs((found - lost) / (1000 * 60 * 60 * 24));
  return diffDays <= 30 ? 1 - (diffDays / 30) : 0;
};