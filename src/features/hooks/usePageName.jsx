import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../app/globalSlice";

const usePageName = (pageName) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPageName(pageName));
	});
};

export default usePageName;
