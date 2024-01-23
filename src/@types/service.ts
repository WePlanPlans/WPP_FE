export type subInfoRes = {
  status: number;
  message: string;
  data: {
    tripId: string;
    startDate: string;
    endDate: string;
    numberOfPeople: number;
    tripName: string;
    tripStatus: string;
    budget: number;
  } | null;
};

export type subItemRes = {
  status: number;
  message: string;
  data: {
    tripId: string;
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

export type Paths = {
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
};

export type subPathRes = {
  status: number;
  message: string;
  data: {
    tripId: string;
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
    tripId: string;
    tripMembers: {
      memberId: number;
      name: string;
      thumbnailUrl: string;
      connected: boolean;
    }[];
    numberOfPeople: number;
  } | null;
};
export type subBudgetRes = {
  status: number;
  message: string;
  data: {
    tripId: string;
    budget: number;
    calculatedPrice: number;
  } | null;
};

export type subCursorRes = {
  status: number;
  message: string;
  data: {
    tripId: string;
    visitDate: string;
    memberId: number;
    name: string;
    x: number;
    y: number;
  } | null;
};

export type SocketContextType = {
  tripInfo: subInfoRes | null;
  tripItem: subItemRes | null;
  tripPath: subPathRes | null;
  tripMember: subMemberRes | null;
  tripBudget: subBudgetRes | null;
  tripCursor: subCursorRes | null;
  tripId: string;
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
};

export interface pubUpdateTripItemReq {
  visitDate: string;
  tripItemOrder: {
    tripItemId: number;
    seqNum: number;
  }[];
}
