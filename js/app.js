	let inputbox = document.getElementById('password');

	let passlength = 12;

	let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lowercase = 'abcdefghijklmnopqrstuvwxyz';
	let numbers =    '0123456789';
	let symbol = '@#$%^&*()_+~|{}[]></-=';

	let allchar = uppercase + lowercase + numbers + symbol;

	function passwordcreate()
	{
		let password = '';

		password += uppercase[Math.floor(Math.random() * uppercase.length)];
		password += lowercase[Math.floor(Math.random() * lowercase.length)];
		password += numbers[Math.floor(Math.random() * numbers.length)];
		password += symbol[Math.floor(Math.random() * symbol.length)];

		while(passlength > password.length)
		{
			password += allchar[Math.floor(Math.random() * allchar.length)];
		}
			inputbox.value = password;
	}

	function copypassword()
	{
		inputbox.select();
		document.execCommand("copy");
	}