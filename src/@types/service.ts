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
    transportation: 'CAR' | 'PUBLIC_TRANSPORTATION';
    tripItems: {
      tripItemId: number;
      tourItemId: number;
      name: string;
      thumbnailUrl: string;
      category: string;
      seqNum: number;
      visitDate: string;
      price: number;
    }[];
  } | null;
};

export type subPathRes = {
  status: number;
  message: string;
  data: {
    tripId: number;
    visitDate: string;
    transportation: 'CAR' | 'PUBLIC_TRANSPORTATION';
    paths: {
      fromTripItemId: number;
      toTripItemId: number;
      fromSeqNum: number;
      toSeqNum: number;
      fromLongitude: string;
      fromLatitude: string;
      toLongitude: string;
      toLatitude: string;
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

export type SocketContextType = {
  tripInfo: subInfoRes | null;
  tripItem: subItemRes | null;
  tripPath: subPathRes | null;
  tripMember: subMemberRes | null;
  tripBudget: subBudgetRes | null;
  callBackPub: (callback: () => void) => void;
};

export type TripItem = {
  tripItemId: number;
  tourItemId: number;
  name: string;
  thumbnailUrl: string;
  category: string;
  seqNum: number;
  visitDate: string;
  price: number;
} | null;
