import { ReactNode } from "react";

export interface NavListType {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface AppointmetnCardProp {
  
}

export interface Earning {
  id: number;
  amount: number;
  type: string;
  description: string;
  reference: string;
  status: string;
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
  earnings: Earning[];
  investments: Investment[];
  createdAt: Date;
  tradingBalance: number;
  hasActiveInvestment: boolean;
  accountActivated: boolean;
  updatedAt: Date;
  isVerified: boolean;
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
  createdAt: Date;
  updatedAt: Date;
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
