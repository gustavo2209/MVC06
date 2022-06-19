using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC06.Models
{
    public class DaoTelefono
    {
        public List<clientes> telefonosQry()
        {
            List<clientes> list = new List<clientes>();

            using (var db = new ModelClientes())
            {
                var query = from c in db.clientes select c;

                foreach (var c in query)
                {
                    clientes cliente = c;

                    foreach (var tel in c.telefonos)
                    {
                        cliente.telefonos.Add(tel);
                    }
                    list.Add(cliente);
                }
            }

            return list;
        }

        public void telefonosIns(telefonos telefono)
        {
            using (var db = new ModelClientes())
            {
                db.telefonos.Add(telefono);
                db.SaveChanges();
            }
        }

        public void telefonosDel(int idtelefono)
        {
            using (var db = new ModelClientes())
            {
                var telefono = db.telefonos.Find(idtelefono);
                db.telefonos.Remove(telefono);
                db.SaveChanges();
            }
        }

        public void telefonosUpd(telefonos telefono)
        {
            using (var db = new ModelClientes())
            {
                var t = db.telefonos.Find(telefono.idtelefono);
                t.telefono = telefono.telefono;
                db.SaveChanges();
            }
        }
    }
}