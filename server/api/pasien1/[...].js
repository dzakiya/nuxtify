import knex from '../../koneksi' // koneksi db mysql
import {
  createRouter,
  defineEventHandler,
  useBase
} from 'h3'

const router = createRouter()

//Get All Data from tabel m_login
router.get('/data', defineEventHandler(async (event) => {
  return 'TEST HOME GET'
  
}))

//Post to tabel m_login
router.post('/data', defineEventHandler(async (event) => {
  // return 'TEST HOME POST'
  //  const body = readBody(event) // untuk mengecek
  //  return body

  const body = await readBody(event)

  const data = {
    nip: body.nip,
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif,
  };

  //  return data; //untuk cek inputan dari body

  // Query INSERT dengan Knex
  try {
    const [user] = await knex('m_login').insert(data, '*');
    return {
      statusCode: 201,
      body: user,
      message: 'Data user berhasil ditambahkan'
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    });
  }
}))

//Get data user dari tabel m_login berdasarkan nip
router.get('/data/:id', defineEventHandler(async (event) => {
  
  const id = getRouterParam(event, 'id')
  
 // return `Tes get by ID = , ${id}!`

  try {
    const userbyID = await knex('m_login').select('*').where('roles', id); //by roles 
    return {
      statusCode: 201,
      body: userbyID,
      message: 'Data user berhasil ditemukan'
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    });
  }
}))

router.delete('/data/:id', defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  //return 'TEST HOME DELETE'
}))

router.put('/data/:id', defineEventHandler(async (event) => { //BELUM BERHASIL UPDATE
  //return 'TEST HOME PUT'
  // const id = getRouterParam(event, 'id') //untuk mengecek 
  // const body = readBody(event)
  // return body
  const body = await readBody(event);
  const id = getRouterParam(event, 'id');

  const data = {
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif,
  };

  //Query Update by nip
  try {
    const [user] = await knex('m_login').where('nip', id.nip).update(data);
    return {
      statusCode: 201,
      body: user,
      message: 'Data user berhasil diperbarui'
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    });
  }

}))

router.patch('/data/:id', defineEventHandler((event) => {
  //return 'TEST HOME PATCH'
  const id = getRouterParam(event, 'id')
  const body = readBody(event)
  return body
}))

export default useBase('/api/pasien', router.handler) // /base/api/v1