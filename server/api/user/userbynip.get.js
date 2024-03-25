import knex from '../../koneksi'; // koneksi db 

export default defineEventHandler(async (event) => {

  //const nip = getRouterParams(event, 'nip');
  const params = getQuery(event);
  //return params

  const nip = params.nip;

  //return nip
  


  //return `Tes get by ID = ${nip}!`

  try {
    const userbyID = await knex('m_login').select('*').where('nip', nip); //by nip
    return {
      statusCode: 200,
      body: userbyID,
      message: 'Data user berhasil ditemukan'
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    });
  }

});