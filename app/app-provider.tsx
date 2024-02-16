"use client";

import { ModalProvider } from "@/components/templates/modal/provider";

const AppProvider = ({ children }) => {
  //   const [queryClient] = useState(() => new QueryClient());
  return (
    // <SessionProvider>
    //   <Provider store={store}>
    <ModalProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {children}
      {/* </QueryClientProvider> */}
    </ModalProvider>
    //   </Provider>
    // </SessionProvider>
  );
};
export default AppProvider;
