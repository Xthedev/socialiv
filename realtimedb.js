import * as PouchDB from "pouchdb-browser";
// localvariant
export const Usersdb = new PouchDB("usersdb");

// online variant
//syncfunction
PouchDB.sync(
  Usersdb,
  "http://admin:senseix1234!!A@20.124.122.164:5984/social",
  {
    live: true,
    retry: true,
  }
)
  .on("change", function (info) {
    // handle change
    console.log("database has changed");
  })
  .on("paused", function (err) {
    // replication paused (e.g. replication up to date, user went offline)
  })
  .on("active", function () {
    // replicate resumed (e.g. new changes replicating, user went back online)
  })
  .on("denied", function (err) {
    // a document failed to replicate (e.g. due to permissions)
  })
  .on("complete", function (info) {
    // handle complete
  })
  .on("error", function (err) {
    // handle error
  });
