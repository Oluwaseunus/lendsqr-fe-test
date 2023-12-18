import { axiosInstance } from "./axios";
import { StatusBadgeProps } from "@/components/StatusBadge";

export interface UserInfo {
  id: string;
  tag: string;
  bvn: string;
  bank: string;
  email: string;
  balance: number;
  username: string;
  children: number;
  dateJoined: "2023-07-24T08:24:45.503Z";
  phoneNumber: string;
  officeEmail: string;
  organization: string;
  accountNumber: string;
  residenceType: string;
  loanRepayment: number;
  monthlyIncome: number[];
  levelOfEducation: string;
  employmentSector: string;
  gender: "Male" | "Female";
  status: StatusBadgeProps["value"];
  employmentStatus: "Employed" | "Unemployed";
  twitter: string;
  facebook: string;
  instagram: string;
  maritalStatus: "Single" | "Married" | "Divorced";
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

export const users: UserInfo[] = [
  {
    status: "Inactive",
    children: 0,
    gender: "Female",
    balance: 20000000,
    tag: "LSQFf587g90",
    bvn: "07060780922",
    username: "Grace Effiom",
    bank: "Providus Bank",
    organization: "Lendsqr",
    maritalStatus: "Single",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: "2023-07-24T08:24:45.503Z",
    residenceType: "Parent's Apartment",
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    employmentSector: "Fintech",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: [20000000, 40000000],
    loanRepayment: 4000000,
    twitter: "grace_effiom",
    facebook: "Grace Effiom",
    instagram: "grace_effiom",
    guarantor: {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
    id: "65996294-aa36-44c0-8eb3-a2bbf2922516",
  },
  {
    status: "Pending",
    children: 0,
    gender: "Male",
    balance: 20000000,
    tag: "LSQFf587g90",
    bvn: "07060780922",
    username: "Adedeji",
    bank: "Providus Bank",
    organization: "Lendsqr",
    maritalStatus: "Single",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: "2023-07-24T08:24:45.503Z",
    residenceType: "Parent's Apartment",
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    employmentSector: "Fintech",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: [20000000, 40000000],
    loanRepayment: 4000000,
    twitter: "adedeji",
    facebook: "Adedeji",
    instagram: "adedeji",
    guarantor: {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
    id: "e19d6162-c46c-4930-aa1d-922dbd93e566",
  },
  {
    status: "Blacklisted",
    children: 0,
    gender: "Female",
    balance: 20000000,
    tag: "LSQFf587g90",
    bvn: "07060780922",
    username: "Adedeji",
    bank: "Providus Bank",
    organization: "Lendsqr",
    maritalStatus: "Single",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: "2023-07-24T08:24:45.503Z",
    residenceType: "Parent's Apartment",
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    employmentSector: "Fintech",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: [20000000, 40000000],
    loanRepayment: 4000000,
    twitter: "adedeji",
    facebook: "Adedeji",
    instagram: "adedeji",
    guarantor: {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
    id: "96446995-6c44-44f5-82a5-d76620a93b23",
  },
  {
    status: "Active",
    children: 0,
    gender: "Female",
    balance: 20000000,
    tag: "LSQFf587g90",
    bvn: "07060780922",
    username: "Adedeji",
    bank: "Providus Bank",
    organization: "Lendsqr",
    maritalStatus: "Single",
    phoneNumber: "08078903721",
    accountNumber: "9912345678",
    email: "adedeji@lendsqr.com",
    dateJoined: "2023-07-24T08:24:45.503Z",
    residenceType: "Parent's Apartment",
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    employmentSector: "Fintech",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: [20000000, 40000000],
    loanRepayment: 4000000,
    twitter: "adedeji",
    facebook: "Adedeji",
    instagram: "adedeji",
    guarantor: {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
    id: "3e26d524-c382-43a9-93d7-4df8ad624fd3",
  },
];

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
