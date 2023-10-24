import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "./DashboardApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { tokenApi } from "./Token";
import { medicalHistoryApi } from "./MedicalHistoryApi";
import { poopHealthApi } from "./PoopHealthApi";
import { petProfileApi } from "./PetProfileApi";
import { userProfileApi } from "./UserProfileApi";
import { dailyWalksApi } from "./DailyWalksApi";
import { sleepHabitsApi } from "./SleepHabitsApi";
import { walkHistoryApi } from "./WalkHistoryApi";
import { sleepHistoryApi } from "./SleepHistoryApi";
import { feedingHistoryApi } from "./FeedingHistoryApi";

export const store = configureStore({
	reducer: {
		[dashboardApi.reducerPath]: dashboardApi.reducer,
		[tokenApi.reducerPath]: tokenApi.reducer,
		[medicalHistoryApi.reducerPath]: medicalHistoryApi.reducer,
		[poopHealthApi.reducerPath]: poopHealthApi.reducer,
		[petProfileApi.reducerPath]: petProfileApi.reducer,
		[userProfileApi.reducerPath]: userProfileApi.reducer,
		[dailyWalksApi.reducerPath]: dailyWalksApi.reducer,
		[sleepHabitsApi.reducerPath]: sleepHabitsApi.reducer,
		[walkHistoryApi.reducerPath]: walkHistoryApi.reducer,
		[sleepHistoryApi.reducerPath]: sleepHistoryApi.reducer,
		[feedingHistoryApi.reducerPath]: feedingHistoryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(dashboardApi.middleware)
			.concat(tokenApi.middleware)
			.concat(medicalHistoryApi.middleware)
			.concat(poopHealthApi.middleware)
			.concat(petProfileApi.middleware)
			.concat(userProfileApi.middleware)
			.concat(dailyWalksApi.middleware)
			.concat(sleepHabitsApi.middleware)
			.concat(walkHistoryApi.middleware)
			.concat(sleepHistoryApi.middleware)
			.concat(feedingHistoryApi.middleware),
});

setupListeners(store.dispatch);
