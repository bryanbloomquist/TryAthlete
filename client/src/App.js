import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//API
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import NavbarArea from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Goals from "./components/Goals/Goals";
import Challenges from "./components/Challenges/Challenges";
import Badges from "./components/Badges/Badges";
import Social from "./components/Social/Social";
// import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';
import { runInContext } from 'vm';

class App extends Component {
  state = {
    scott: {
      id: 1,
      fname: "Scott",
      lname: "Anderson",
      userName: "wildside50",
      avatar: "https://media.licdn.com/dms/image/C5603AQG8RXuzxnp7Vg/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=8fzMGfAM1iGOsjDSm_FAUS-zD1ler13jAEzweHT_nvw",
      activityLog: {

      },
      goals: {
        1: {
          activity: "Run",
          isAchieved: false,
          goalQuant: 5,
          goalType: {
            unit: "miles",
            frequency: "this week",
            time: null,
          }
        },
        2: {
          activity: "Bike",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "hours",
            frequency: "today",
            time: null,
          }
        }
      },
      challenges: {
        1: {
          activity: "Swim",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "days",
            frequency: "this week",
            time: null,
          }
        },
      },
      badges: {
        id: [
          1,2,5
        ]
      },
      friends: {
        id: [
          1, 2, 3, 4, 5
        ]
      }
    },
    ashlen: {
      id: 2,
      fname: "Ashlen",
      lname: "Bruns",
      userName: "tryAshlen",
      avatar: "https://media.licdn.com/dms/image/C5603AQHCHIqg8saACg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=6QlSv60MHLaDtII42_NG6awgDmhLpdysNNxwJshE4e8",
      activityLog: {

      },
      goals: {
        1: {
          activity: "Run",
          isAchieved: false,
          goalQuant: 5,
          goalType: {
            unit: "miles",
            frequency: "this week",
            time: null,
          }
        },
        2: {
          activity: "Bike",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "hours",
            frequency: "today",
            time: null,
          }
        }
      },
      challenges: {
        1: {
          activity: "Swim",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "days",
            frequency: "this week",
            time: null,
          }
        },
      },
      badges: {
        id: [
          1,2,5
        ]
      },
      friends: {
        id: [
          1, 2, 3, 4, 5
        ]
      }
    },
    bryan: {
      id: 3,
      fname: "Bryan",
      lname: "Bloomquist",
      userName: "dungeonMaster",
      avatar: "https://media.licdn.com/dms/image/C5603AQGfOg_kMRgAxg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=KSkhM_y0lzMiAmZgGJdJWdxUxxO4678kBkGeye5iddY",
      activityLog: {

      },
      goals: {
        1: {
          activity: "Run",
          isAchieved: false,
          goalQuant: 5,
          goalType: {
            unit: "miles",
            frequency: "this week",
            time: null,
          }
        },
        2: {
          activity: "Bike",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "hours",
            frequency: "today",
            time: null,
          }
        }
      },
      challenges: {
        1: {
          activity: "Swim",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "days",
            frequency: "this week",
            time: null,
          }
        },
      },
      badges: {

      },
      friends: {
        id: [
          1, 2, 3, 4, 5
        ]
      }
    },
    john: {
      id: 4,
      fname: "John",
      lname: "Evans",
      userName: "prettyBoy",
      avatar: "https://media.licdn.com/dms/image/C5603AQFqk9UyKm7cjw/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=_vQAdIdDL0nlgaB2lCoParKhkOMgVEj_ftqx3rK950Y",
      activityLog: {

      },
      goals: {
        1: {
          activity: "Run",
          isAchieved: false,
          goalQuant: 5,
          goalType: {
            unit: "miles",
            frequency: "this week",
            time: null,
          }
        },
        2: {
          activity: "Bike",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "hours",
            frequency: "today",
            time: null,
          }
        }
      },
      challenges: {
        1: {
          activity: "Swim",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "days",
            frequency: "this week",
            time: null,
          }
        },
      },
      badges: {
        id: [
          1,2,5
        ]
      },
      friends: {
        id: [
          1, 2, 3, 4, 5
        ]
      }
    },
    steve: {
      id: 5,
      fname: "Steve",
      lname: "Thompson",
      userName: "taskMaster",
      avatar: "https://media.licdn.com/dms/image/C4E03AQHytoRECLHRyg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=jGC1r9oyhxaY9DgmIDDwtPydAi7HDsp-00OCJPVZQ2I",
      activityLog: {

      },
      goals: {
        1: {
          activity: "Run",
          isAchieved: false,
          goalQuant: 5,
          goalType: {
            unit: "miles",
            frequency: "this week",
            time: null,
          }
        },
        2: {
          activity: "Bike",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "hours",
            frequency: "today",
            time: null,
          }
        }
      },
      challenges: {
        1: {
          activity: "Swim",
          isAchieved: false,
          goalQuant: 3,
          goalType: {
            unit: "days",
            frequency: "this week",
            time: null,
          }
        },
      },
      badges: {
        id: [
          1,2,5
        ]
      },
      friends: {
        id: [
          1, 2, 3, 4, 5
        ]
      }
    },
  };

  
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  //   componentDidMount() {
  //     API.getUser(this.props.match.params.id)
  //         .then(res => this.setState({ user: res.data }))
  //         .catch(err => console.log(err));
  // }
  render() {
    const user=this.state.ashlen;
    return (
      <Router>
        <Wrapper>
          <NavbarArea>{user}</NavbarArea>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} user={user} />} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={user} />} />
            <Route exact path="/goals" render={(props) => <Goals {...props} user={user} />} />
            <Route exact path="/challenges" render={(props) => <Challenges {...props} user={user} />} />
            <Route exact path="/badges" render={(props) => <Badges {...props} user={user} />} />
            <Route exact path="/social" render={(props) => <Social {...props} user={user} />} />
            <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    )
  }
}
export default App;
