using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
		[HttpGet]
		public IActionResult Index()
		{
			return Ok("File Uploading");
		}

		[Route("uploadfiles")]
		[HttpPost]
		public ActionResult UploadFiles([FromForm] IFormFile[] files)
		{
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest("Error " + ex.Message);
			}
		}
	}
}