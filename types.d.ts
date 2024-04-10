import 'next-auth';

declare module 'next-auth' {
    interface Session {
        coachData?: any; // Replace `any` with a more specific type as needed
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        coachData?: any; // Replace `any` with a more specific type as needed
    }
}

declare module 'next-auth' {
    interface User {
        coachData?: any; // Replace `YourCustomDataType` with the actual type of your custom data
    }

    interface AdapterUser {
        coachData?: any;
    }
}