export default async function (userId, lazyQuery, updateUserData) {
	if (!userId) return;
	const [
		getUserInfo,
		{ graphQlLoading, error: graphQlError, data: graphQlData },
	] = lazyQuery;
	// do the query
	const { data } = await getUserInfo({ variables: { id: userId } });
	//
	if (!graphQlLoading) updateUserData(data.user[0]);
}
