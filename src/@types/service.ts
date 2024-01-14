export type subInfoRes = {
  status: number;
  message: string;
  data: {
    tripId: number;
    startDate: string;
    endDate: string;
    numberOfPeople: number;
    tripName: string;
    tripStatus: string;
    area: string;
    subarea: string;
    budget: number;
  } | null;
};

export type subItemRes = {
  status: number;
  message: string;
  data: {
    tripId: number;
    visitDate: string;
    tripItems: {
      tripItemId: number;
      tourItemId: number;
      name: string;
      thumbnailUrl: string;
      category: string;
      transportation: string;
      seqNum: number;
      visitDate: string;
      price: number;
    }[];
  } | null;
};

export type subPath = {
  fromSeqNum: number;
  toSeqNum: number;
  fromLongitude: string;
  fromLatitude: string;
  toLongitude: string;
  toLatitude: string;
  transportation: string;
  pathInfo: {
    price: number;
    totalDistance: number;
    totalTime: number;
  }
};

export type subPathRes = {
  status: number;
  message: string;
  data: {
    tripId: number;
    visitDate: string;
    paths: {
      fromSeqNum: number;
      toSeqNum: number;
      fromLongitude: string;
      fromLatitude: string;
      toLongitude: string;
      toLatitude: string;
      transportation: string;
      pathInfo: {
        price: number;
        totalDistance: number;
        totalTime: number;
      };
    }[];
  } | null;
};

export type subMemberRes = {
  status: number;
  message: string;
  data: {
    tripId: number;
    connectedMembers: {
      memberId: number;
      name: string;
      thumbnailUrl: string;
    }[];
    tripMembers: {
      memberId: number;
      name: string;
      thumbnailUrl: string;
    }[];
    numberOfPeople: number;
  } | null;
};
export type subBudgetRes = {
  status: number;
  message: string;
  data: {
    tripId: number;
    budget: number;
    calculatedPrice: number;
  } | null;
};
