type subInfoMessage = (message: {
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
}) => void;

type subItemMessage = (response: {
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
  };
}) => void;

type subPathMessage = (response: {
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
  };
}) => void;

type subMemberMessage = (response: {
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
  };
}) => void;

type subBudgetMessage = (response: {
  status: number;
  message: string;
  data: {
    tripId: string;
    budget: number;
    calculatedPrice: number;
  };
}) => void;

type subCursorMessage = (response: {
  status: number;
  message: string;
  data: {
    tripId: string;
    visitDate: string;
    memberId: number;
    name: string;
    x: number;
    y: number;
  };
}) => void;

interface pubInfo {
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  tripName: string;
  budget: number;
}

interface pubAddTripItem {
  visitDate: string;
  newTripItems: {
    tourItemId: number;
  }[];
}

interface pubUpdatePrice {
  tripId: string;
  visitDate: string;
  price: string;
}

interface pubUpdateTripItem {
  visitDate: string;
  tripItemOrder: {
    tripItemId: number;
    seqNum: number;
  }[];
}

interface pubUpdateTransportation {
  visitDate: string;
  transportation: 'CAR' | 'PUBLIC_TRANSPORTATION';
}

interface pubVisitDate {
  tripId: string;
  oldVisitDate: string;
  newVisitDate: string;
}

interface pubDeleteItem {
  tripId: string;
  visitDate: string;
}

interface pubMember {
  token: string;
}

interface pubGetPathAndItems {
  visitDate: string;
}

interface pubUpdateBudget {
  budget: number;
}

interface pubCursor {
  token: string;
  visitDate: string;
  x: number;
  y: number;
}
