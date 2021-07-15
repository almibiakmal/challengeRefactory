package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"path"

	"github.com/gorilla/pat"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

func main() {
	const cliendId = "248534239407-doqqa9443q193o0ilksf7ke003e5d6hv.apps.googleusercontent.com"
	const secretKey = "738SajMs0PaTBodmJaoc09vT"
	const urlCallback = "http://localhost:1323/auth/google/callback"
	var pageLogin = path.Join("./src/views", "login.html")
	var pageHome = path.Join("./src/views", "profil.html")

	goth.UseProviders(
		google.New(cliendId, secretKey, urlCallback, "email", "profile"),
	)

	var router = pat.New()

	router.Get("/auth/{provider}/callback", func(res http.ResponseWriter, req *http.Request) {
		user, err := gothic.CompleteUserAuth(res, req)
		if err != nil {
			fmt.Fprintln(res, err)
			return
		}

		tampil, _ := template.ParseFiles(pageHome)
		tampil.Execute(res, user)
	})

	router.Get("/auth/{provider}", gothic.BeginAuthHandler)

	router.Get("/", func(res http.ResponseWriter, req *http.Request) {
		tampil, _ := template.ParseFiles(pageLogin)
		tampil.Execute(res, false)
	})

	//Running server
	log.Println("listening on localhost:1323")
	log.Fatal(http.ListenAndServe(":1323", router))
}
