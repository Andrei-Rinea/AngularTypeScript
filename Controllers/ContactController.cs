﻿using System.Collections.Generic;
using System.Web.Http;
using AngularTypeScript.Models;

namespace AngularTypeScript.Controllers
{
    public class ContactController : ApiController
    {
        public IEnumerable<Contact> Get()
        {
            yield return new Contact { Id = 1, Name = "Andrei", Email = "andrei@rinea.ro" };
            yield return new Contact { Id = 2, Name = "Ion", Email = "rinea.andrei@gmail.com" };
        }

        public int Post(Contact contact)
        {
            return 23;
        }

        public void Put(int id, Contact contact)
        {

        }

        public void Delete(int id)
        {

        }
    }
}