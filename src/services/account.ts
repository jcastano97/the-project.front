import { SignInRequestInterface } from "../core/types/account/SignInRequestInterface";
import { SignInResponseInterface } from "../core/types/account/SignInResponseInterface";
import { ApiResponseInterface } from "../core/types/ApiResponseInterface";
import { AxiosClient } from "../core/utils/AxiosClient";

export async function signIn(
	request: SignInRequestInterface
): Promise<ApiResponseInterface<SignInResponseInterface>> {
	const response = await AxiosClient.getInstance().axiosUnauthorizedClient.post(
		"/api/account/signin",
		request
	);

	return response.data as ApiResponseInterface<SignInResponseInterface>;
}
