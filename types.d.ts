import "next-auth";

declare module "next-auth" {
  interface Session {
    email: string;
    name: string;
    coachData?: any; // Replace `any` with a more specific type as needed
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    email: string;
    name: string;
    coachData?: any; // Replace `any` with a more specific type as needed
  }
}

declare module "next-auth" {
  interface User {
    email: string;
    coachData?: any; // Replace `YourCustomDataType` with the actual type of your custom data
  }

  interface AdapterUser {
    coachData?: any;
  }
}
