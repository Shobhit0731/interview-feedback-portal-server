export default {
    loginUser: async (parent, args, context) => {
      const { payload: { email, password } } = args;
      const { dataSources: { userAPI } } = context;
      const response = await userAPI.loginUser({ email, password });
      return response;
    },

    signUpUser: async (parent, args, context) => {
      const { payload: {name, email, password } } = args;
      console.log("Signup",args)
      const { dataSources: { userAPI } } = context;
      const response = await userAPI.signUpUser({ name, email, password });
      console.log(response)
        return response;
    },

    resetPasswordUser: async (parent, args, context) => {
      const { payload: { email,password } } = args;
      console.log(args)
      const { dataSources: { userAPI } } = context;
      const response = await userAPI.resetPasswordUser({email, password });
      // console.log(password)
        return response;
    }

  }

