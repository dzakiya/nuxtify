import knex from '../../koneksi'; // koneksi db 



export default defineEventHandler(async (event) => {

    //const nip = getRouterParams(event, 'nip');
    const params = await getRouterParams(event);
    //return params

    let nip = params.nip;

    //return nip
    //Query DELETE dengan Knex
    try {
        const user = await knex('m_login').where('nip', nip).del();
        //return user;
return        {
            statusCode: 200,
            body: user,
            message: 'Data user berhasil dihapus'
        };
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: error.message
        });
    }

});

//BERHASIL TAPI DI POSTMAN MUNCUL SEPERTI INI
// {
//     "url": "/api/user/zakiyates5@rssa.com",
//     "statusCode": 500,
//     "statusMessage": "",
//     "message": "(intermediate value) is not iterable",
//     "stack": "<pre><span class=\"stack internal\">at createError (/C:/Users/RSSA/Documents/Nuxtify/app-nuxtify/node_modules/h3/dist/index.mjs:79:15)</span>\n<span class=\"stack\">at Object.handler (C:\\Users\\RSSA\\Documents\\Nuxtify\\app-nuxtify\\server\\api\\user\\[nip].delete.js:23:1)</span>\n<span class=\"stack internal\">at process.processTicksAndRejections (node:internal/process/task_queues:95:5)</span>\n<span class=\"stack internal\">at async Object.handler (/C:/Users/RSSA/Documents/Nuxtify/app-nuxtify/node_modules/h3/dist/index.mjs:1962:19)</span>\n<span class=\"stack internal\">at async Server.toNodeHandle (/C:/Users/RSSA/Documents/Nuxtify/app-nuxtify/node_modules/h3/dist/index.mjs:2249:7)</span></pre>"
// }