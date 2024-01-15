interface pubInfo {
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  tripName: string;
  tripStatus: 'BEFORE' | 'DURING' | 'AFTER';
  area: string;
  subarea: string;
  budget: number;
}

interface pubAddTripItem {
  visitDate: string;
  newTripItems: {
    tourItemId: number;
  }[];
}

interface pubUpdateTripItem {
  visitDate: string;
  tripItemOrder: {
    tripItemId: number;
    seqNum: number;
  }[];
}

interface pubVisitDate {
  // visitDate: '2024-01-07',
  visitDate: string;
}

interface pubUpdatePrice {
  price: number;
}

interface pubUpdateTransportation {
  transportation: 'CAR' | 'PUBLIC_TRANSPORTATION';
}

interface pubMember {
  memberId: number;
}

type subInfoMessage = (message: {
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
}) => void;

type subItemMessage = (response: {
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
  };
}) => void;

type subPathMessage = (response: {
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
  };
}) => void;

type subMemberMessage = (response: {
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
  };
}) => void;

type subBudgetMessage = (response: {
  status: number;
  message: string;
  data: {
    tripId: number;
    budget: number;
    calculatedPrice: number;
  };
}) => void;
