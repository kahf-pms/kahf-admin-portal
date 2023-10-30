import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCanGoBack, setPageName } from "../app/globalSlice";

const usePageName = (pageName, canGoBack = true) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPageName(pageName));
		dispatch(setCanGoBack(canGoBack));
	});
};

export default usePageName;
