document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const registerForm = document.getElementById("registerForm")

  
    if (loginForm) {
      loginForm.addEventListener("submit", async function (e) {
        e.preventDefault()
        const submitButton = this.querySelector('button[type="submit"]')
        const submitText = document.getElementById("submitText")
        const submitLoader = document.getElementById("submitLoader")
  
        submitButton.disabled = true
        submitText.textContent = "Yuklanmoqda..."
        submitLoader.classList.remove("hidden")
  
        const formData = new FormData(this)
        const email = formData.get("email")
        const password = formData.get("password")
  
        try {
          const data = await api("/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
          })
          showNotification(data.message || "Muvaffaqiyatli kirish qildingiz", "success")
          window.location.href = "dashboard.html"
        } catch (error) {
          showNotification(error.message || "Kirish muvaffaqiyatsiz", "error")
        } finally {
          submitButton.disabled = false
          submitText.textContent = "Kirish"
          submitLoader.classList.add("hidden")
        }
      })
    }
  
    if (registerForm) {
      registerForm.addEventListener("submit", async function (e) {
        e.preventDefault()
        const submitButton = this.querySelector('button[type="submit"]')
        const submitText = document.getElementById("submitText")
        const submitLoader = document.getElementById("submitLoader")
  
        submitButton.disabled = true
        submitText.textContent = "Yuklanmoqda..."
        submitLoader.classList.remove("hidden")
  
        const formData = new FormData(this)
        const userData = {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          password: formData.get("password"),
        }
  
        try {
          const data = await api("/auth/register", {
            method: "POST",
            body: JSON.stringify(userData),
          })
          showNotification(data.message || "Hisob muvaffaqiyatli yaratildi", "success")
          window.location.href = "dashboard.html"
        } catch (error) {
          showNotification(error.message || "Ro'yxatdan o'tish muvaffaqiyatsiz", "error")
        } finally {
          submitButton.disabled = false
          submitText.textContent = "Hisob yaratish"
          submitLoader.classList.add("hidden")
        }
      })
    }
  })

  

