export const environment = {
  API_URL: 'http://localhost:8080/api/v1',
  apiEndpoints: {
    auth: {
      login: 'auth/login',
      verifyToken: 'auth/verificar-token',
      refreshToken: 'auth/refresh-token',
      logout: 'auth/logout',
    },
    user: {
      register: 'usuario/register',
      deleteWithCredentials: 'usuario/eliminar',
      update: 'usuario/actualizar',
      validateEmail: 'usuario/validar',
      forgotPassword: 'usuario/olvide-mi-contrasena',
      resetPassword: 'usuario/cambiar-contrasena',
      resendVerificationEmail: 'usuario/reenviar-correo-confirmacion',
      changePassword: 'usuario/cambiar-contrasena-logueado',
    },
    course: {
      create: 'cursos',
      deleteById: 'cursos',
      update: 'cursos',
      getOneById: 'cursos/id',
      getOneByAttendanceCode: 'cursos/codigo-asistencia',
      getManyByUserId: 'cursos/usuario',
      getManyByName: 'cursos/termino',
      generateAttendanceCode: 'cursos/codigo-asistencia',
    },
    student: {
      createOne: 'estudiantes',
      createMany: 'estudiantes/lista',
      getOneById: 'estudiantes/id',
      getOneByLu: 'estudiantes/lu',
      getManyByCourseId: 'estudiantes/curso',
      deleteOneById: 'estudiantes',
      deleteManyByIds: 'estudiantes',
    },
    attendance: {
      createOne: 'asistencias/registrar',
      getManyByCourseIdAndDate:
        'asistencias/obtenerAsistenciasPorCursoYPeriodo',
      getManyByCourseIdAndDateAndStudentLu:
        'asistencias/obtenerAsistenciasPorLuCursoYPeriodo',
      getManyByStudentLuAndDate:
        'asistencias/obtenerAsistenciaPorFechaLuYHorario',
      generateAttendanceExcelByCourseIdAndDate:
        'asistencias/obtenerAsistenciasPorCursoYPeriodo/excel',
      generateAttendanceExcelByCourseIdAndDateAndStudentLu:
        'asistencias/obtenerAsistenciasPorLuCursoYPeriodo/excel',
    },
    schedule: {
      createOne: 'horarios/registrar',
      updateOne: 'horarios/actualizar',
      deleteOneById: 'horarios/eliminar',
      getManyByCourseId: 'horarios/obtenerHorarios',
      getOneById: 'horarios/obtenerHorario',
    },
  },
};
