using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        /// <summary>
        /// validation has been handeled here both are required fields
        /// </summary>
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
