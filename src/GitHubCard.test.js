import GitHubCard from "./GitHubCard";
import Renderer from "react-test-renderer";

test('renders a snapshot', () => {
    const tree = Renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})