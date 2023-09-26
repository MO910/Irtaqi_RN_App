export default async function (userId, lazyQuery, updateUserData) {
	if (!userId) return;
	const [
		getUserInfo,
		{ graphQlLoading, error: graphQlError, data: graphQlData },
	] = lazyQuery;
	// do the query
	const { data } = await getUserInfo({ variables: { id: userId } });
	// update the user data after loading
	delete data._typename;
	if (!graphQlLoading) updateUserData({ id: userId, ...data.user[0] });
}
