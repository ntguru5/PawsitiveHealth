import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "./DashboardApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { tokenApi } from "./Token";
import { medicalHistoryApi } from "./MedicalHistoryApi";
import { poopHealthApi } from "./PoopHealthApi";
import { petProfileApi } from "./PetProfileApi";
import { userProfileApi } from "./UserProfileApi";
import { dailyWalksApi } from "./DailyWalksApi";

export const store = configureStore({
	reducer: {
		[dashboardApi.reducerPath]: dashboardApi.reducer,
		[tokenApi.reducerPath]: tokenApi.reducer,
		[medicalHistoryApi.reducerPath]: medicalHistoryApi.reducer,
		[poopHealthApi.reducerPath]: poopHealthApi.reducer,
		[petProfileApi.reducerPath]: petProfileApi.reducer,
		[userProfileApi.reducerPath]: userProfileApi.reducer,
		[dailyWalksApi.reducerPath]: dailyWalksApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(dashboardApi.middleware)
			.concat(tokenApi.middleware)
			.concat(medicalHistoryApi.middleware)
			.concat(poopHealthApi.middleware)
			.concat(petProfileApi.middleware)
			.concat(userProfileApi.middleware)
			.concat(dailyWalksApi.middleware),
});

setupListeners(store.dispatch);
