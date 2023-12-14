import { StatusBadgeProps } from "@/components/StatusBadge";

export interface UserInfo {
  id: string;
  tag: string;
  bank: string;
  email: string;
  balance: string;
  username: string;
  dateJoined: string;
  phoneNumber: string;
  organization: string;
  accountNumber: string;
  status: StatusBadgeProps["value"];
}

export const users: UserInfo[] = [
  {
    status: "Inactive",
    tag: "LSQFf587g90",
    username: "Adedeji",
    balance: "20000000",
    bank: "Providus Bank",
    organization: "Lendsqr",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: new Date().toString(),
    id: "65996294-aa36-44c0-8eb3-a2bbf2922516",
  },
  {
    status: "Pending",
    tag: "LSQFf587g90",
    username: "Adedeji",
    balance: "20000000",
    bank: "Providus Bank",
    organization: "Lendsqr",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: new Date().toString(),
    id: "e19d6162-c46c-4930-aa1d-922dbd93e566",
  },
  {
    tag: "LSQFf587g90",
    username: "Adedeji",
    balance: "20000000",
    status: "Blacklisted",
    bank: "Providus Bank",
    organization: "Lendsqr",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: new Date().toString(),
    id: "96446995-6c44-44f5-82a5-d76620a93b23",
  },
  {
    status: "Active",
    tag: "LSQFf587g90",
    username: "Adedeji",
    balance: "20000000",
    bank: "Providus Bank",
    organization: "Lendsqr",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: new Date().toString(),
    id: "3e26d524-c382-43a9-93d7-4df8ad624fd3",
  },
];
