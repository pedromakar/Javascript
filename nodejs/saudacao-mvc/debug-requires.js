const fs = require('fs');

try {
	const site = require('./controllers/siteController');
	const pod = require('./controllers/podutosControler');

	console.log('siteController keys:', Object.keys(site));
	console.log('siteController index:', typeof site.index);

	const resolved = require.resolve('./controllers/podutosControler');
	console.log('require.resolve podutosControler ->', resolved);
	console.log('file content:\n' + fs.readFileSync(resolved, 'utf8'));

	console.log('podutosControler keys:', Object.keys(pod));
	console.log('podutosControler produtos:', typeof pod.produtos);
} catch (err) {
	console.error('Erro no debug:', err);
}
