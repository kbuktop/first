function authenticate(login, password) {
	if (login === 'login' && password === 'password')
		return true;
	
	return false;
}