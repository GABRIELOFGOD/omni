import { ReactNode } from "react";

export interface NavListType {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface IDashboard  {
  name: string;
  value: number;
  isMoney: boolean;
  icon?: ReactNode;
}

export enum EarningStatus {
  CLAIMED = "claimed",
  PENDING = "pending",
  EXPIRED = "expired",
  CANCELLED = "cancelled",
}

export enum EarningType {
  ONE_DOLLAR_MAGIC = "one-dollar-magic",
  SIX_DOLLAR_MAGIC = "six-dollar-magic",
  ROI = "roi",
  PROMOTIONAL_INCOME = "promotional-income",
  REFERRAL_BONUS = "referral-bonus",
}

export enum UserRank {
  USER = "us",
  ASSOCIATE_GROUP_LEADER = "agl",
  GROUP_LEADER = "gl",
  ASSOCIATE_MASTER_LEADER = "aml",
  MASTER_LEADER = "ml",
  ASSOCIATE_LEADING_LEADER = "all",
  LEADING_LEADER = "ll",
  CROWN_LEADER = "cl",
  PRINCE_OF_OMNI_STOCK = "pos",
}

export interface AppointmetnCardProp {
  
}

export interface Earning {
  id: number;
  amount: number;
  type: EarningType;
  description: string;
  reference: string;
  status: EarningStatus;
  transactionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  referredBy: UserData | null;
  phoneNumber: string;
  referralCode: string;
  email: string;
  balance: number;
  claimable: number;
  oneDollar: number;
  earningsHistory: Earning[];
  investments: Investment[];
  createdAt: Date;
  promotion: number;
  status: "active" | "blocked";
  role: string;
  hasActiveInvestment: boolean;
  accountActivated: boolean;
  updatedAt: Date;
  isVerified: boolean;
  rank: UserRank;
}

export interface UserRegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country?: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  referralCode?: string;
}

export interface Investment {
  id: number;
  amount: number;
  expired: boolean;
  amountReturned: number;
  investor: UserData;
  availableAmount: number;
  createdAt: Date;
  updatedAt: Date;
  type: "investment" | "account-activation"
}

export interface DoughtnutChartProps {
  color: "red" | "green" | "blue";
  percentage: number;
  // total: number;
  completeLabel: string;
  remainingLabel: string;
}

export interface NavLiistType {
  path: string;
  name: string;
  image?: string;
  icon?: IconType;
}

export const adminSidebar: NavLiistType[] = [
  {
    path: "",
    name: "Dashboard",
    // icon: <BiSolidDashboard />
  },
  {
    path: "users",
    name: "Users"
  },
  // {
  //   path: "requests",
  //   name: "Withdrawal Requests"
  // },
  // {
  //   path: "withrawal-report",
  //   name: "Withdrawal Report"
  // },
  {
    path: "investments",
    name: "Investments"
  },
  {
    path: "support",
    name: "Support"
  },
  {
    path: "control",
    name: "Admin Control"
  }
]

export interface TicketData {
  id: number;
  userId: number;
  title: string;
  description: string;
  status: "open" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: Date;
  updatedAt: Date;
}
  
// {
//   "id": 2,
//   "userId": 2,
//   "title": "Unable to claim referral bonus",
//   "description": "I referred a user, but my bonus hasn’t been credited yet.",
//   "status": "open",
//   "priority": "medium",
//   "createdAt": "2024-12-22T14:00:00.000Z",
//   "updatedAt": "2024-12-22T14:00:00.000Z"
// },
