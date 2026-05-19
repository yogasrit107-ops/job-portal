use actix_web::{get, App, HttpServer, Responder};

#[get("/")]
async fn home() -> impl Responder {
    "Job Portal Backend Running"
}

#[get("/jobs")]
async fn jobs() -> impl Responder {
    r#"
    [
        {
            "id": 1,
            "title": "Frontend Developer",
            "location": "Chennai"
        },
        {
            "id": 2,
            "title": "Backend Developer",
            "location": "Bangalore"
        }
    ]
    "#
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(home)
            .service(jobs)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}