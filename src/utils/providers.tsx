"use client";

import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {NextUIProvider} from "@nextui-org/react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			staleTime: 1000 * 60 * 2,
		},
	},
});
function Providers({children}: React.PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>{children}</NextUIProvider>
		</QueryClientProvider>
	);
}

export default Providers;
