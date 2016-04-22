// © 2015 Intralinks, Inc.

using System;
using System.Threading;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace AngularIntro.Filters
{
    public class DelayMillisecondsAttribute : ActionFilterAttribute
    {
        private readonly TimeSpan _duration;

        public DelayMillisecondsAttribute(ushort milliseconds = 1000) : this(TimeSpan.FromMilliseconds(milliseconds)) { }
        private DelayMillisecondsAttribute(TimeSpan duration)
        {
            _duration = duration;
        }

        /// <summary>
        /// Occurs before the action method is invoked.
        /// </summary>
        /// <param name="actionContext">The action context.</param>
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            base.OnActionExecuting(actionContext);
            Thread.Sleep(_duration);
        }
    }
}