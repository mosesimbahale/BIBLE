const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type IChronicles {
    book: String!
    chapters: [IChroniclesChapter!]!
    verses: [IChroniclesVerse!]!
    text: String!
  }

  type IChroniclesChapter {
    chapter: String!
    verses: [IChroniclesVerse!]!
  }

  type IChroniclesVerse {
    verse: String!
    text: String!
  }

  # ICorinthians
  type ICorinthians {
    book: String!
    chapters: [ICorinthiansChapter!]!
    verses: [ICorinthiansVerse!]!
    text: String!
  }

  type ICorinthiansChapter {
    chapter: String!
    verses: [ICorinthiansVerse!]!
  }

  type ICorinthiansVerse {
    verse: String!
    text: String!
  }

  # IJohn
  type IJohn {
    book: String!
    chapters: [IJohnChapter!]!
    verses: [IJohnVerse!]!
    text: String!
  }

  type IJohnChapter {
    chapter: String!
    verses: [IJohnVerse!]!
  }

  type IJohnVerse {
    verse: String!
    text: String!
  }

  # 1Kings
  type IKings {
    book: String!
    chapters: [IKingsChapter!]!
    verses: [IKingsVerse!]!
    text: String!
  }

  type IKingsChapter {
    chapter: String!
    verses: [IKingsVerse!]!
  }

  type IKingsVerse {
    verse: String!
    text: String!
  }

  # 1Peter
  type IPeter {
    book: String!
    chapters: [IPeterChapter!]!
    verses: [IPeterVerse!]!
    text: String!
  }

  type IPeterChapter {
    chapter: String!
    verses: [IPeterVerse!]!
  }

  type IPeterVerse {
    verse: String!
    text: String!
  }

  ################## Query ##################
  type Query {
    IChronicles: [IChronicles!]!
    ICorinthians: [ICorinthians!]!
    IJohn: [IJohn!]!
    IKings: [IKings!]!
    IPeter: [IPeter!]!
  }
`;

module.exports = typeDefs;
