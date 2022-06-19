using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC06.Models
{
    public class DaoCorreo
    {
        public List<clientes> correosQry()
        {
            List<clientes> list = new List<clientes>();

            using (var db = new ModelClientes())
            {
                var query = from c in db.clientes select c;

                foreach (var c in query)
                {
                    clientes cliente = c;

                    foreach (var co in c.correos)
                    {
                        cliente.correos.Add(co);
                    }

                    foreach (var tel in c.telefonos)
                    {
                        cliente.telefonos.Add(tel);
                    }

                    list.Add(cliente);
                }
            }

            return list;
        }

        public void correosIns(correos correo)
        {
            using (var db = new ModelClientes())
            {
                db.correos.Add(correo);
                db.SaveChanges();
            }
        }

        public void correosDel(int idcorreo)
        {
            using (var db = new ModelClientes())
            {
                var correo = db.correos.Find(idcorreo);
                db.correos.Remove(correo);
                db.SaveChanges();
            }
        }

        public void correosUpd(correos correo)
        {
            using (var db = new ModelClientes())
            {
                var c = db.correos.Find(correo.idcorreo);
                c.correo = correo.correo;
                db.SaveChanges();
            }
        }
    }
}