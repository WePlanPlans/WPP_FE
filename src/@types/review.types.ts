interface ReviewRequest {
  rating: number;
  keywords: Keyword[];
  content: string;
}

interface Keyword {
  keywordId: number;
  content: string;
}
