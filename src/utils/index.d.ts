import { ReactNode } from "react";

export interface NavListType {
  title: string;
  path: string;
  icon: ReactNode;
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
  REF_COMMISSION = "ref-commission",
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
  referredBy: User;
  phoneNumber: string;
  referralCode: string;
  email: string;
  balance: number;
  claimable: number;
  earningsHistory: Earning[];
  investments: Investment[];
  createdAt: Date;
  tradingBalance: number;
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
}

export interface DoughtnutChartProps {
  color: "red" | "green" | "blue";
  percentage: number;
  // total: number;
  completeLabel: string;
  remainingLabel: string;
}
  
// import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { User } from "./user.entity";

// @Entity("investments")
// export class Investment {
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Column()
//   amount!: number;

//   @Column({ default: false })
//   expired!: boolean;

//   @Column({ type: "decimal", precision: 10, scale: 4, default: "0.00" })
//   amountReturned!: number;

//   @ManyToOne( () => User, (user) => user.investments)
//   investor!: User;

//   @CreateDateColumn()
//   createdAt!: Date;

//   @UpdateDateColumn()
//   updatedAt!: Date;
// }
