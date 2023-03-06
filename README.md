# Auto Tweet LURP
Este script se conecta a la API de Twitter utilizando la biblioteca de twit y sigue la cuenta de Twitter especificada mediante stream. Cuando se publica un nuevo tweet, se crea un objeto MessageEmbed utilizando la biblioteca de discord.js con el texto y la información del usuario del tweet. Luego, se envía el objeto MessageEmbed al canal de Discord especificado mediante client.channels.cache.get(channelId).send(embed). Este script está creado para que el bot de lurp publique los tweets automáticamente, y no lo tenga que hacer SrJuNi0r.

consumer_key: 'TU_CONSUMER_KEY', consumer_secret: 'TU_CONSUMER_SECRET', access_token: 'TU_ACCESS_TOKEN', access_token_secret: 'TU_ACCESS_TOKEN_SECRET':

Estas líneas son las credenciales necesarias para conectarse a la API de Twitter y poder interactuar con ella. Cada aplicación que utilice la API de Twitter debe estar registrada en el sitio web de desarrolladores de Twitter y tener sus propias credenciales de acceso únicas. Aqui explico para que sirve cada una de las credenciales: 

consumer_key: Es la clave de consumidor de la aplicación de Twitter que estás utilizando. Esta clave es única para cada aplicación y se utiliza para autenticar la aplicación con la API de Twitter.
consumer_secret: Es el secreto de consumidor de la aplicación de Twitter que estás utilizando. Este secreto también es único para cada aplicación y se utiliza junto con la clave de consumidor para autenticar la aplicación con la API de Twitter.
access_token: Es el token de acceso de usuario para la cuenta de Twitter que estás utilizando. Este token se genera cuando un usuario de Twitter autoriza la aplicación para acceder a su cuenta.
access_token_secret: Es el secreto de token de acceso de usuario para la cuenta de Twitter que estás utilizando. Este secreto se genera junto con el token de acceso y se utiliza para autenticar la aplicación con la API de Twitter en nombre del usuario.
