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
