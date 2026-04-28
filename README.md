Mini Navegador Proxy para Vercel
Este repositorio es un navegador web embebido que permite acceder a páginas a través de un proxy serverless (función API) en Vercel.
Perfecto para pruebas, acceder a sitios bloqueados a nivel de red o como ejemplo didáctico.

Estructura
/public/index.html → La interfaz del navegador.
/api/proxy.js → Función de Vercel Serverless “proxy” HTTP/HTTPS.
/package.json → Indica soporte ESM.
Cómo desplegar
Sube este repositorio a GitHub (o GitLab/Bitbucket).
Ve a vercel.com, crea un nuevo proyecto y selecciona este repositorio.
Usa la configuración por defecto y haz Deploy.
Accede a la URL pública que Vercel te proporcione.
¡Ya tienes un navegador proxy funcional!
Avisos
No expongas esto públicamente para grandes audiencias sin seguridad.
No funciona perfectamente con sitios modernos que bloqueen iframes, necesiten recursos no proxyficados o scripts avanzados.
