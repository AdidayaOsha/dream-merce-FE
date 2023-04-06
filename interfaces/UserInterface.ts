type User = {
   id: string;
   name: string;
   username: string | undefined;
   email: string;
   phone: string | undefined;
   googleId: string | undefined;
   appleId: string | undefined;
   createdAt: string;
   isActive: boolean;
};

export default User;
